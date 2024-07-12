import type { Schema, Attribute } from '@strapi/strapi';

export interface AudioListening extends Schema.Component {
  collectionName: 'components_audio_listenings';
  info: {
    displayName: 'listening';
  };
  attributes: {
    media: Attribute.Media<'videos' | 'audios'>;
  };
}

export interface ContentQuestionair extends Schema.Component {
  collectionName: 'components_content_questionairs';
  info: {
    displayName: 'questionair';
  };
  attributes: {
    question: Attribute.Text;
  };
}

export interface FileAudio extends Schema.Component {
  collectionName: 'components_file_audio';
  info: {
    displayName: 'audio';
  };
  attributes: {};
}

export interface FileMedia extends Schema.Component {
  collectionName: 'components_file_media';
  info: {
    displayName: 'media';
  };
  attributes: {
    audio_file: Attribute.Media<'videos' | 'audios', true>;
  };
}

export interface IeltsListeningAudio extends Schema.Component {
  collectionName: 'components_ielts_listening_audio';
  info: {
    displayName: 'audio';
  };
  attributes: {
    Audio: Attribute.Media<'videos' | 'audios'>;
  };
}

export interface IeltsListeningFilling extends Schema.Component {
  collectionName: 'components_ielts_listening_fillings';
  info: {
    displayName: 'filling';
    description: '';
  };
  attributes: {
    Question: Attribute.String;
    Answer: Attribute.String;
  };
}

export interface IeltsListeningMultipleChoice extends Schema.Component {
  collectionName: 'components_ielts_listening_multiple_choices';
  info: {
    displayName: 'multiple choice';
    description: '';
  };
  attributes: {
    Question: Attribute.Text;
    Answer: Attribute.String;
    Choices: Attribute.JSON;
  };
}

export interface IeltsListeningQuestionair extends Schema.Component {
  collectionName: 'components_ielts_listening_questionairs';
  info: {
    displayName: 'questionair';
  };
  attributes: {
    Questionaire: Attribute.RichText;
  };
}

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
      'audio.listening': AudioListening;
      'content.questionair': ContentQuestionair;
      'file.audio': FileAudio;
      'file.media': FileMedia;
      'ielts-listening.audio': IeltsListeningAudio;
      'ielts-listening.filling': IeltsListeningFilling;
      'ielts-listening.multiple-choice': IeltsListeningMultipleChoice;
      'ielts-listening.questionair': IeltsListeningQuestionair;
      'ielts-reading.filling': IeltsReadingFilling;
      'ielts-reading.multiple-choice': IeltsReadingMultipleChoice;
      'ielts-reading.paragraph': IeltsReadingParagraph;
      'ielts-reading.questionair': IeltsReadingQuestionair;
    }
  }
}
