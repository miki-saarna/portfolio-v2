type SkillType = 'language' | 'framework' | 'tool'
type TagColor = 'bg-blue-300' | 'bg-green-300' | 'bg-orange-300'

type skillsList = {
  skill: string,
  type: SkillType
}

export const restaurantReservationSkills: skillsList[] = [
  { skill: 'React', type: 'framework' },
  { skill: 'Express', type: 'framework' },
  { skill: 'PostgreSQL', type: 'framework' },
  { skill: 'Knex', type: 'framework' },
  { skill: 'Jest', type: 'framework' },
  { skill: 'Puppeteer', type: 'framework' },
]

export const votingDAppSkills: skillsList[] = [
  { skill: 'Solidity', type: 'language' },
  { skill: 'TypeScript', type: 'language' },
  { skill: 'Foundry', type: 'framework' },
  { skill: 'React', type: 'framework' },
  { skill: 'ethers.js', type: 'framework' },
  { skill: 'Tailwind', type: 'framework' }
]
export const sellingPartnerAPISkills: skillsList[] = [
  { skill: 'Python', type: 'language' },
  { skill: 'Amazon Selling Partner API', type: 'framework' },
  { skill: 'gspread API', type: 'framework' }
]

export function getColorFromSkillType(skillType: SkillType): TagColor {
  if (skillType === 'language') {
    return 'bg-blue-300'
  } else if (skillType === 'framework') {
    return 'bg-green-300'
  } else {
    return 'bg-orange-300'
  }
}

