export interface Section {
  id: string
  sectionName: string
  sectionLanguage: string
  description: string
}

export interface SectionApiResponse {
  results: Section[]
  page: number
  limit: number
  totalPages: number
  totalResults: number
}

export interface SectionFilters {
  name?: string
}

export interface PayloadType {
  limit?: number
  page?: number
  sortBy?: string
}
