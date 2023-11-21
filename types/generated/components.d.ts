import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsHost extends Schema.Component {
  collectionName: 'components_components_hosts';
  info: {
    displayName: 'host';
    icon: 'user';
  };
  attributes: {
    name: Attribute.String;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.host': ComponentsHost;
    }
  }
}
