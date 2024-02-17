export interface IBadge {
  text: string;
  iconSrc?: string | null;
  isActive?: boolean;
  id: string;
  onClick?: (id: string) => void;
}
