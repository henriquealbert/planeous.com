import type { FileWithPath } from '@mantine/dropzone'
import { parse } from 'papaparse'
import type { ParseError, ParseMeta } from 'papaparse'

export const parseCsv = async (file: FileWithPath): Promise<ParsedCsvResult> => {
  const csvText = await file.text()
  const result = parse(csvText, { header: true }) as ParsedCsvResult

  return { ...result, filename: file.name }
}

export interface ParsedCsvResult {
  filename: string
  data: {
    [key: string]: string
  }[]
  errors: ParseError[]
  meta: ParseMeta
}
