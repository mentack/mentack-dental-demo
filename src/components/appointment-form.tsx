
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { CalendarIcon, Loader2 } from 'lucide-react'
import { format } from 'date-fns'
import { useSearchParams } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { type Treatment, treatments, doctors } from '@/lib/data'
import type { Dictionary } from '@/lib/get-dictionary'
import type { Locale } from '@/i18n.config'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { cn } from '@/lib/utils'

interface AppointmentFormProps {
  dictionary: Dictionary['contact_page']['form']
  lang: Locale
}

export function AppointmentForm({ dictionary, lang }: AppointmentFormProps) {
  const { toast } = useToast()
  const searchParams = useSearchParams()
  const preselectedTreatment = searchParams.get('treatment')
  const preselectedDoctorId = searchParams.get('doctor')

  const preselectedDoctor = doctors.find(d => d.id.toString() === preselectedDoctorId);
  const initialMessage = preselectedDoctor ? `I would like to book an appointment with ${preselectedDoctor.name}.` : '';

  const formSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters.'),
    phone: z.string().min(10, 'Please enter a valid phone number.'),
    email: z.string().email('Please enter a valid email address.'),
    treatment: z.string().optional(),
    date: z.date().optional(),
    message: z.string().optional(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      treatment: preselectedTreatment || '',
      message: initialMessage,
    },
  })

  const { isSubmitting } = form.formState

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // This is a demo. In a real app, you'd send this to an API endpoint.
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(values)
    
    toast({
      title: dictionary.success_title,
      description: dictionary.success_description,
    })
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dictionary.full_name}</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dictionary.phone}</FormLabel>
                <FormControl>
                  <Input placeholder="+1 555 123 4567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dictionary.email}</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="treatment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dictionary.preferred_treatment}</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={dictionary.select_treatment} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {treatments.map((t: Treatment) => (
                      <SelectItem key={t.slug} value={t.slug}>
                        {t.title[lang]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>{dictionary.preferred_date}</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-full pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={date => date < new Date() || date < new Date('1900-01-01')}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dictionary.message}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about your needs..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {dictionary.submit_button}
        </Button>
      </form>
    </Form>
  )
}
