import {
  APLHANUMERIC_SPECIAL_CHARACETRS,
  createMaxLengthRule,
  createPatternRule,
  createRequiredRule,
} from '@/utils/helpers/validation.helper';

const nameValidationRules = [createRequiredRule('Please enter Name')];

const descriptionValidationRules = [
  createMaxLengthRule(2000, 'Details exceeds 2000 characters'),
  createPatternRule(
    APLHANUMERIC_SPECIAL_CHARACETRS,
    'Details must be alphanumeric'
  ),
];

export { nameValidationRules, descriptionValidationRules };
