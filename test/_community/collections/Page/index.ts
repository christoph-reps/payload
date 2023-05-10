import { CollectionConfig } from '../../../../src/collections/config/types';
import { Block } from '../../../../src/fields/config/types';

const richtext: Block = {
  slug: 'richtext',
  fields: [{
    name: 'Content',
    type: 'richText',
  }],
};
export const Pages: CollectionConfig = {
  slug: 'pages',
  versions: {
    drafts: true,
    maxPerDoc: 20,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', '_status'],
    enableRichTextRelationship: true,
  },
  labels: {
    singular: 'Seite',
    plural: 'Seiten',
  },
  fields: [
    {
      name: 'title',
      label: 'Titel',
      required: true,
      type: 'text',
    },
    {
      name: 'metaTitle',
      label: 'Titel (Browser)',
      admin: {
        description:
          'Alternativer Titel, der im Browserfenster/Tab angezeigt, bzw. in Suchergebnissen bevorzugt wird',
      },
      required: true,
      type: 'text',
    },
    {
      name: 'slug',
      label: 'Slug',
      required: true,
      type: 'text',
      unique: true,
    },
    {
      name: 'content',
      label: 'Content',
      type: 'blocks',
      blocks: [richtext],
    },
  ],
};
