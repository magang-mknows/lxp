import { ICommonMetaResponse } from "@/service/types";

export type TsubjectItems = {
  id: string;
  teacher_id: string;
  department_id: string;
  name: string;
  subject_code: string;
  degree: string;
  level: number;
  indicator: string;
  study_experience: string;
  teaching_materials: string;
  basic_competencies: string;
  tools_needed: string;
  scoring: string;
  description: string;
  thumbnail: string;
  credit: number;
  session_total_number: number;
  slug: string;
};

export type TdetailInformation = {
  name?: string;
  indicator?: string;
  study_experience?: string;
  teaching_materials?: string;
  basic_competencies?: string;
  tools_needed?: string;
  session_total_number?: number;
  id?: string;
};

export type TDepartmentId = {
  id: string;
};

export type TSubjectResponse = ICommonMetaResponse<TsubjectItems>;
