export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
    "Aadhaar Card",
    "Voter ID Card",
    "PAN Card",
    "Passport",
    "Driving License",
    "Ration Card",
    "Birth Certificate",
    "Employee ID Card",
    "Student ID Card",
    "Health Insurance Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Dr. Devi Shetty -  Cardiology",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Dr. Ranjana Dhanu - Obstetrics and Gynecology",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Dr. Sudhansu Bhattacharyya -Neurology",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Dr. Ravi Sharma - Pediatrics",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Dr. Neha Patil - Dermatology",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Dr. Prakash Rao - Orthopedics",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Dr. Shalini Rao - Psychiatry",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Dr. Ritu Gupta - ENT (Ear, Nose, and Throat)",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Dr. Sanjay Gupta - Internal Medicine",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};