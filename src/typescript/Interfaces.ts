export interface IMSLPResult {
  id: string;
  imslp_id: string;
  parent: string;
  composer: string;
  title: string;
  icatno?: string;
  pageid?: number;
  permlink: string;
}

export interface APIQuery {
  title: string;
  composer: string;
  start?: number;
  limit?: number;
}

export interface ReturnFormat {
  title: string;
  composer: string;
  scores: ScoreFormat[];
  price: number;
  site: 'IMSLP';
  link: string;
}

export interface ScoreFormat {
  title: string;
  href: string;
  size: string;
}
