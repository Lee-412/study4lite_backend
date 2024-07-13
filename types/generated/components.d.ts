import type { Schema, Attribute } from '@strapi/strapi';

export interface IeltsListeningAudioUrl extends Schema.Component {
  collectionName: 'components_ielts_listening_audio_urls';
  info: {
    displayName: 'audio_url';
  };
  attributes: {
    Url: Attribute.RichText;
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

export interface IeltsListeningImage extends Schema.Component {
  collectionName: 'components_ielts_listening_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    img: Attribute.Media<'images' | 'files', true>;
  };
}

export interface IeltsListeningImgUrl extends Schema.Component {
  collectionName: 'components_ielts_listening_img_urls';
  info: {
    displayName: 'img_url';
  };
  attributes: {
    url: Attribute.String;
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

export interface IeltsReadingImage extends Schema.Component {
  collectionName: 'components_ielts_reading_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    url: Attribute.String;
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
      'ielts-listening.audio-url': IeltsListeningAudioUrl;
      'ielts-listening.audio': IeltsListeningAudio;
      'ielts-listening.filling': IeltsListeningFilling;
      'ielts-listening.image': IeltsListeningImage;
      'ielts-listening.img-url': IeltsListeningImgUrl;
      'ielts-listening.multiple-choice': IeltsListeningMultipleChoice;
      'ielts-listening.questionair': IeltsListeningQuestionair;
      'ielts-reading.filling': IeltsReadingFilling;
      'ielts-reading.image': IeltsReadingImage;
      'ielts-reading.multiple-choice': IeltsReadingMultipleChoice;
      'ielts-reading.paragraph': IeltsReadingParagraph;
      'ielts-reading.questionair': IeltsReadingQuestionair;
    }
  }
}
