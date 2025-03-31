import { Category } from '../../models/healthpackage.model';
export const healthCategories: Category[] = [
  {
    id: 1,
    name: 'Recommended',
    packages: [
      {
        id: 1,
        name: 'Basic Health Package-female',
        testsIncluded: 12,
        hospital: 'Fortis Okhla',
        price: 4350,
        tests: [
          'Complete Blood Count',
          'Lipid Profile',
          'Liver Function Test',
          'Kidney Function Test',
          'Thyroid Profile',
          'Blood Sugar Fasting',
          'Urine Routine',
          'ECG',
          'Doctor Consultation',
          'Vitamin D',
          'Vitamin B12',
          'HbA1c'
        ]
      },
      {
        id: 2,
        name: 'Basic Health Package-male',
        testsIncluded: 11,
        hospital: 'Fortis Okhla',
        price: 4350,
        tests: [
          'Complete Blood Count',
          'Lipid Profile',
          'Liver Function Test',
          'Kidney Function Test',
          'Thyroid Profile',
          'Blood Sugar Fasting',
          'Urine Routine',
          'ECG',
          'Doctor Consultation',
          'PSA (Prostate Specific Antigen)',
          'HbA1c'
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Preconception',
    packages: [
      {
        id: 3,
        name: 'Pre-Pregnancy Checkup',
        testsIncluded: 15,
        hospital: 'Fortis Gurugram',
        price: 8500,
        tests: [
          'Complete Blood Count',
          'Blood Group & Rh Factor',
          'TORCH Panel',
          'Rubella Antibody',
          'HIV',
          'TSH',
          'FSH',
          'LH',
          'Prolactin',
          'AMH Test',
          'Pap Smear',
          'Vitamin D',
          'Vitamin B12',
          'Folic Acid',
          'Gynecologist Consultation'
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Cancer Screening',
    packages: [
      {
        id: 4,
        name: 'Comprehensive Cancer Screening - Female',
        testsIncluded: 8,
        hospital: 'Fortis Memorial',
        price: 12500,
        tests: [
          'Mammography',
          'Pap Smear',
          'CA 125',
          'CA 15.3',
          'CEA',
          'Complete Blood Count',
          'Oncologist Consultation',
          'Ultrasound Whole Abdomen'
        ]
      },
      {
        id: 5,
        name: 'Comprehensive Cancer Screening - Male',
        testsIncluded: 7,
        hospital: 'Fortis Memorial',
        price: 11500,
        tests: [
          'PSA (Prostate Specific Antigen)',
          'CEA',
          'AFP',
          'CA 19.9',
          'Complete Blood Count',
          'Oncologist Consultation',
          'Ultrasound Whole Abdomen'
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'Diabetes',
    packages: [
      {
        id: 6,
        name: 'Diabetes Care Package',
        testsIncluded: 9,
        hospital: 'Fortis Noida',
        price: 3500,
        tests: [
          'Fasting Blood Sugar',
          'Post Prandial Blood Sugar',
          'HbA1c',
          'Lipid Profile',
          'Kidney Function Test',
          'Urine Microalbumin',
          'Diabetologist Consultation',
          'Diet Consultation',
          'Foot Examination'
        ]
      },
      {
        id: 7,
        name: 'Diabetes Prevention Package',
        testsIncluded: 6,
        hospital: 'Fortis Noida',
        price: 2500,
        tests: [
          'Fasting Blood Sugar',
          'HbA1c',
          'Insulin Fasting',
          'Lipid Profile',
          'BMI Assessment',
          'Nutritionist Consultation'
        ]
      }
    ]
  },
  {
    id: 5,
    name: 'General Health',
    packages: [
      {
        id: 8,
        name: 'Executive Health Checkup',
        testsIncluded: 14,
        hospital: 'Fortis Vasant Kunj',
        price: 7500,
        tests: [
          'Complete Blood Count',
          'Lipid Profile',
          'Liver Function Test',
          'Kidney Function Test',
          'Thyroid Profile',
          'Blood Sugar Fasting & PP',
          'Urine Routine',
          'ECG',
          'X-Ray Chest',
          'Ultrasound Whole Abdomen',
          'Vitamin D',
          'Vitamin B12',
          'Doctor Consultation',
          'Diet Consultation'
        ]
      },
      {
        id: 9,
        name: 'Senior Citizen Health Checkup',
        testsIncluded: 16,
        hospital: 'Fortis Vasant Kunj',
        price: 8500,
        tests: [
          'Complete Blood Count',
          'Lipid Profile',
          'Liver Function Test',
          'Kidney Function Test',
          'Thyroid Profile',
          'Blood Sugar Fasting & PP',
          'Urine Routine',
          'ECG',
          'X-Ray Chest',
          'ECHO',
          'Bone Density Test',
          'Eye Examination',
          'Dental Examination',
          'Vitamin D',
          'Vitamin B12',
          'Geriatric Specialist Consultation'
        ]
      }
    ]
  }
];