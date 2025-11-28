import React from 'react'

const IconBase = ({ children, size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {children}
  </svg>
)

export const Sun = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2m0 16v2M4 12H2m20 0h-2M5.64 5.64 4.22 4.22M19.78 19.78 18.36 18.36M18.36 5.64 19.78 4.22M4.22 19.78 5.64 18.36" />
  </IconBase>
)

export const Moon = (props) => (
  <IconBase {...props}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </IconBase>
)

export const MoveRight = (props) => (
  <IconBase {...props}>
    <path d="M3 12h18" />
    <path d="m15 6 6 6-6 6" />
  </IconBase>
)

export const Scale = (props) => (
  <IconBase {...props}>
    <path d="M12 3v18" />
    <path d="M6 7h12" />
    <path d="m6 7-3 9h6l-3-9Z" />
    <path d="m18 7-3 9h6l-3-9Z" />
    <path d="M5 20h14" />
  </IconBase>
)

export const Scroll = (props) => (
  <IconBase {...props}>
    <path d="M7 3h11a2 2 0 0 1 2 2v13" />
    <path d="M17 21H6a2 2 0 0 1-2-2V6a3 3 0 0 1 3-3" />
    <path d="M7 8h11" />
    <path d="M7 12h7" />
  </IconBase>
)

export const LayoutGrid = (props) => (
  <IconBase {...props}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
  </IconBase>
)

export const Users = (props) => (
  <IconBase {...props}>
    <path d="M9 7a4 4 0 1 1 8 0" />
    <path d="M5 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
    <path d="M3 21v-2a2 2 0 0 1 2-2h1" />
    <path d="M17 5a4 4 0 0 1 4 4v1" />
  </IconBase>
)

export const ArrowUpRight = (props) => (
  <IconBase {...props}>
    <path d="m7 17 10-10" />
    <path d="M7 7h10v10" />
  </IconBase>
)

export const Sparkles = (props) => (
  <IconBase {...props}>
    <path d="M12 3 13.5 8l4.5 1.5-4.5 1.5L12 16l-1.5-5-4.5-1.5L10.5 8 12 3Z" />
    <path d="M5 4l1 3-3 1 3 1 1 3 1-3 3-1-3-1-1-3-1 3Z" />
    <path d="m18 14 1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" />
  </IconBase>
)

export const MapPin = (props) => (
  <IconBase {...props}>
    <path d="M21 10c0 6-9 11-9 11S3 16 3 10a9 9 0 0 1 18 0Z" />
    <circle cx="12" cy="10" r="3" />
  </IconBase>
)

export const Terminal = (props) => (
  <IconBase {...props}>
    <path d="m4 17 6-6-6-6" />
    <path d="M12 19h8" />
  </IconBase>
)

export const Activity = (props) => (
  <IconBase {...props}>
    <path d="M22 12h-4l-3 9-4-18-3 9H2" />
  </IconBase>
)

export const Hexagon = (props) => (
  <IconBase {...props}>
    <path d="M21 16.5V7.5L12 2 3 7.5v9L12 22l9-5.5Z" />
  </IconBase>
)

export const Asterisk = (props) => (
  <IconBase {...props}>
    <path d="M12 6v12" />
    <path d="M4.93 7.5 19.07 16.5" />
    <path d="M4.93 16.5 19.07 7.5" />
  </IconBase>
)

export const Lock = (props) => (
  <IconBase {...props}>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M12 16v2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </IconBase>
)

export const CheckCircle = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-5" />
  </IconBase>
)

export const Loader2 = (props) => (
  <IconBase {...props}>
    <path d="M12 2v4" />
    <path d="m16.24 7.76 2.83-2.83" />
    <path d="M18 12h4" />
    <path d="m16.24 16.24 2.83 2.83" />
    <path d="M12 18v4" />
    <path d="M4.93 19.07 7.76 16.24" />
    <path d="M2 12h4" />
    <path d="M4.93 4.93 7.76 7.76" />
  </IconBase>
)

export const X = (props) => (
  <IconBase {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </IconBase>
)

export const Shield = (props) => (
  <IconBase {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
  </IconBase>
)

export const FileText = (props) => (
  <IconBase {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
    <path d="M14 2v6h6" />
    <path d="M10 13h8" />
    <path d="M10 17h6" />
    <path d="M8 13h.01M8 17h.01" />
  </IconBase>
)

export const Zap = (props) => (
  <IconBase {...props}>
    <path d="m13 2-8 12h6l-2 8 8-12h-6Z" />
  </IconBase>
)

export const AlertTriangle = (props) => (
  <IconBase {...props}>
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </IconBase>
)

export const Globe = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
  </IconBase>
)

export const Cpu = (props) => (
  <IconBase {...props}>
    <rect x="5" y="5" width="14" height="14" rx="2" />
    <rect x="9" y="9" width="6" height="6" rx="1" />
    <path d="M9 1v4" />
    <path d="M15 1v4" />
    <path d="M9 19v4" />
    <path d="M15 19v4" />
    <path d="M1 9h4" />
    <path d="M1 15h4" />
    <path d="M19 9h4" />
    <path d="M19 15h4" />
  </IconBase>
)

export const TrendingUp = (props) => (
  <IconBase {...props}>
    <path d="m23 6-9.5 9.5-5-5L1 18" />
    <path d="M17 6h6v6" />
  </IconBase>
)

export default {
  Sun,
  Moon,
  MoveRight,
  Scale,
  Scroll,
  LayoutGrid,
  Users,
  ArrowUpRight,
  Sparkles,
  MapPin,
  Terminal,
  Activity,
  Hexagon,
  Asterisk,
  Lock,
  CheckCircle,
  Loader2,
  X,
  Shield,
  FileText,
  Zap,
  AlertTriangle,
  Globe,
  Cpu,
  TrendingUp,
}
