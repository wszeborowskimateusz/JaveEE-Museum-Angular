import {Curator} from './curator';
import {Exhibit} from './exhibit';

export class Museum {
  id: number;

  curator: Curator;

  name: string;

  city: string;

  openingDate: Date;

  exhibitList: Exhibit[];
}
