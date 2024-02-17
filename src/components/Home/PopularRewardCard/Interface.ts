interface IItem {
  image: string;
  merchantLogo: string;
  merchantName: string;
  name: string;
  pointEarned: number;
}

export interface IPopularRewardCard {
  item: IItem;
}
