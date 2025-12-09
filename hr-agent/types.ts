export interface HRProfile {
  personalInfo: PersonalInfo;
  compensation: Compensation;
  availability: Availability;
  locationPreferences: LocationPreferences;
  workAuthorization: WorkAuthorization;
  skills: Skills;
  experience: Experience[];
  projects: Project[];
  education: Education[];
  careerNarrative: CareerNarrative;
  rolePreferences: RolePreferences;
  careerGoals: CareerGoals;
  strengths: Strengths;
  behavioralExamples: BehavioralExamples;
  questionsForEmployer: string[];
  references: References;
  additionalNotes: AdditionalNotes;
}

export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  currentLocation: string;
  hometown: string;
  summary: string;
}

export interface Compensation {
  currentCTC: {
    total: number;
    breakdown: {
      basic: number;
      hra: number;
      specialAllowance: number;
      employerPF: number;
    };
    monthlyGross: number;
    monthlyTakeHome: number;
    currency: string;
    displayValue: string;
  };
  expectedCTC: {
    minimum: number;
    maximum: number;
    negotiable: boolean;
    displayRange: string;
    reasoning: string;
  };
}

export interface Availability {
  currentStatus: string;
  lastWorkingDay: string;
  earliestJoiningDate: string;
  noticePeriod: string;
  immediatelyAvailable: boolean;
}

export interface LocationPreferences {
  currentLocation: string;
  preferredLocations: string[];
  openToRemote: boolean;
  willingToRelocate: boolean;
  reasoning: string;
}

export interface WorkAuthorization {
  nationality: string;
  validWorkLocations: string[];
  requiresSponsorship: boolean;
  openToRemoteForForeignCompanies: boolean;
  visaStatus: string;
}

export interface Skills {
  languages: string[];
  databases: string[];
  biAndVisualization: string[];
  librariesAndFrameworks: string[];
  dataEngineering: string[];
  proficiencyLevels: Record<string, number>;
}

export interface Experience {
  role: string;
  company: string;
  companyFullName?: string;
  location: string;
  period: string;
  duration: string;
  employeeId?: string;
  department?: string;
  performanceRating?: string;
  achievements: string[];
  keyMetrics: Record<string, string | number>;
}

export interface Project {
  title: string;
  tech: string[];
  year: string;
  category: string;
  description: string[];
  metrics?: Record<string, string | number>;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  duration: string;
  location: string;
}

export interface CareerNarrative {
  currentRole: string;
  reasonForLeaving: string;
  reasonForLeavingDiplomatic: string;
}

export interface RolePreferences {
  preferredRoles: string[];
  preferredIndustries: string[];
  companySizePreference: string;
  workModePreference: string;
  dealBreakers: string[];
}

export interface CareerGoals {
  oneYear: string;
  threeYear: string;
  fiveYear: string;
}

export interface Strengths {
  technical: string[];
  soft: string[];
}

export interface BehavioralExamples {
  biggestAchievement: string;
  biggestChallenge: string;
  conflictResolution: string;
  leadership: string;
  timeManagement: string;
  problemSolving: string;
  learningAgility: string;
}

export interface References {
  available: boolean;
  notes: string;
}

export interface AdditionalNotes {
  noticePeriodAlreadyServed: boolean;
  canStartImmediately: boolean;
  openToContractRoles: boolean;
  preferFullTime: boolean;
  healthInsuranceImportant: boolean;
  learningBudgetPreferred: boolean;
  remoteWorkSetup?: string;
  portfolioWebsite?: string;
}

export type InterviewMode =
  | 'hr-screening'
  | 'technical-recruiter'
  | 'hiring-manager'
  | 'negotiation'
  | 'general';

export type ResponseStyle =
  | 'concise'      // 30 seconds
  | 'detailed'     // 2-3 minutes
  | 'star';        // STAR format (Situation, Task, Action, Result)
