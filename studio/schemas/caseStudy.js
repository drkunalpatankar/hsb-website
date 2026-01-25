export default {
    name: 'caseStudy',
    title: 'Case Study',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Case Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Class II Correction', value: 'class-ii' },
                    { title: 'Impactions', value: 'impactions' },
                    { title: 'Open Bite', value: 'open-bite' },
                    { title: 'Severe Crowding', value: 'crowding' },
                    { title: 'Surgical Cases', value: 'surgical' },
                    { title: 'Other', value: 'other' },
                ],
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'mainImage',
            title: 'Main Image (Thumbnail)',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'beforeImage',
            title: 'Before Image (Optional)',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'afterImage',
            title: 'After Image (Optional)',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'summary',
            title: 'Summary',
            description: 'Brief 1-2 sentence description for the card',
            type: 'text',
            rows: 3,
            validation: Rule => Rule.required()
        },
        {
            name: 'technicalDetails',
            title: 'Technical Details',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Full scientific explanation of the case'
        },
    ],

    preview: {
        select: {
            title: 'title',
            subtitle: 'category',
            media: 'mainImage',
        },
    },
}
