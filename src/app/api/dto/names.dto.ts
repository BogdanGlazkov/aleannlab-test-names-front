export interface NameDto {
  id: number;
  name: string;
  rank: number;
}

export interface NameResponseDto {
  name: string;
  rank: number;
}

export interface NameDataDto {
  data: NameDto[];
}
