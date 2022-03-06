export enum locales {
  "ko-KR" = "ko-KR",
  "en-US" = "en-US",
}

export interface IindexPageGlobalProps {
  locales: Partial<locales>;
}
