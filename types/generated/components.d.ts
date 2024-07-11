import type { Schema, Attribute } from '@strapi/strapi';

export interface IeltsReadingFilling extends Schema.Component {
  collectionName: 'components_ielts_reading_fillings';
  info: {
    displayName: 'Filling';
  };
  attributes: {
    Question: Attribute.Text;
    Answer: Attribute.String;
  };
}

export interface IeltsReadingMultipleChoice extends Schema.Component {
  collectionName: 'components_ielts_reading_multiple_choices';
  info: {
    displayName: 'Multiple Choice';
    description: '';
  };
  attributes: {
    Choices: Attribute.JSON;
    Answer: Attribute.String;
    Question: Attribute.Text;
  };
}

export interface IeltsReadingParagraph extends Schema.Component {
  collectionName: 'components_ielts_reading_paragraphs';
  info: {
    displayName: 'Paragraph';
    description: '';
  };
  attributes: {
    Content: Attribute.RichText;
  };
}

export interface IeltsReadingQuestionair extends Schema.Component {
  collectionName: 'components_ielts_reading_questionairs';
  info: {
    displayName: 'Questionair';
    description: '';
  };
  attributes: {
    Content: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ielts-reading.filling': IeltsReadingFilling;
      'ielts-reading.multiple-choice': IeltsReadingMultipleChoice;
      'ielts-reading.paragraph': IeltsReadingParagraph;
      'ielts-reading.questionair': IeltsReadingQuestionair;
    }
  }
}
