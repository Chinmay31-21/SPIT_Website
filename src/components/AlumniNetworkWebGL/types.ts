export interface AlumniMember {
  id: string;
  name: string;
  company: string;
  position: string;
  graduationYear: number;
  department: string;
  location: string;
  avatar: string;
  isActive: boolean;
  linkedIn?: string;
  email?: string;
  bio: string;
  achievements: string[];
  skills: string[];
}

export interface OrbitConfig {
  radius: number;
  speed: number;
  direction: number;
}