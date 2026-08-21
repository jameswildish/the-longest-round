import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'dailyEntry',
  title: 'Daily Entry',
  type: 'document',
  description: 'The root record. Every screen on the app and site — Today, the Log, Insights, the website archive — reads from this one collection, so nothing is entered twice.',
  fields: [
    defineField({
      name: 'day',
      title: 'Day Number',
      type: 'number',
      validation: (r) => r.required().integer().positive(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'cyclingMiles',
      title: 'Cycling Miles',
      type: 'number',
    }),
    defineField({
      name: 'swimmingMiles',
      title: 'Swimming Miles',
      type: 'number',
      description: 'Only set on the two crossing days (Channel, Strait of Gibraltar).',
    }),
    defineField({
      name: 'recoveryScore',
      title: 'Recharge Score (%)',
      type: 'number',
      validation: (r) => r.min(0).max(100),
    }),
    defineField({
      name: 'sleepMinutes',
      title: 'Sleep (minutes)',
      type: 'number',
    }),
    defineField({
      name: 'avgHeartRate',
      title: "Today's Activity AVG HR (bpm)",
      type: 'number',
      description: 'Average heart rate for the day from BiotrackOS or manual entry.',
      validation: (r) => r.min(30).max(220),
    }),
    defineField({
      name: 'avgHRV',
      title: 'Morning HRV (ms)',
      type: 'number',
      description: 'Morning heart rate variability reading.',
      validation: (r) => r.min(0).max(300),
    }),
    defineField({
      name: 'ritualsCompleted',
      title: 'Rituals Completed',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'ritual'}]}],
    }),
    defineField({
      name: 'ridingTodayGuest',
      title: 'Riding Today',
      type: 'reference',
      weak: true,
      to: [{type: 'guestRider'}],
      description: 'Leave empty on solo days — the app and site both show a "solo leg" state automatically.',
    }),
    defineField({
      name: 'companionRider',
      title: 'Companion (Full-Journey Rider)',
      type: 'reference',
      weak: true,
      to: [{type: 'guestRider'}],
      description: 'The full-journey guest rider this entry\'s companion health data below belongs to.',
    }),
    defineField({
      name: 'companionRecoveryScore',
      title: "Companion's Recharge Score (%)",
      type: 'number',
      validation: (r) => r.min(0).max(100),
    }),
    defineField({
      name: 'companionSleepMinutes',
      title: "Companion's Sleep (minutes)",
      type: 'number',
    }),
    defineField({
      name: 'companionAvgHeartRate',
      title: "Companion's Activity AVG HR (bpm)",
      type: 'number',
      description: 'Average heart rate for the day from BiotrackOS or manual entry.',
      validation: (r) => r.min(30).max(220),
    }),
    defineField({
      name: 'companionAvgHRV',
      title: "Companion's Morning HRV (ms)",
      type: 'number',
      description: 'Morning heart rate variability reading.',
      validation: (r) => r.min(0).max(300),
    }),
    defineField({
      name: 'dayComplete',
      title: 'Day Complete',
      type: 'boolean',
      description: 'Tick once the day is done. Miles only count toward the countdown and stats only show once this is checked.',
      initialValue: false,
    }),
    defineField({
      name: 'journal',
      title: "Darren's Journal",
      type: 'text',
    }),
    defineField({
      name: 'journalPhoto',
      title: 'Journal Photo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'insightOverride',
      title: '"What\'s Driving It" Override',
      type: 'text',
      description: 'Written by an editor, or by an automated job reading this same data. Shown in place of the computed ritual/mileage line whenever it\'s filled in - leave blank to let it compute automatically.',
    }),
  ],
  orderings: [
    {title: 'Day', name: 'dayAsc', by: [{field: 'day', direction: 'asc'}]},
  ],
  preview: {
    select: {day: 'day', cyclingMiles: 'cyclingMiles', date: 'date'},
    prepare({day, cyclingMiles, date}) {
      return {title: `Day ${day} — ${cyclingMiles} mi`, subtitle: date}
    },
  },
})
