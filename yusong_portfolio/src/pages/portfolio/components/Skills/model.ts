import React from 'react';

export enum SkillProficiency {
  Familiar = 'Familiar',
  Tried = 'Tried',
}

export interface SkillItem {
  title: string;
  imageNode: React.ReactElement;
  proficiency?: SkillProficiency;
  tags?: string[];
}

export interface SkillSet {
  title: string;
  items: SkillItem[];
}
