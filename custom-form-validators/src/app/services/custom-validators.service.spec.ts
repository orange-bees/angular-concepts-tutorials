import { CustomValidatorsService } from './custom-validators.service';
import { FormGroup, FormControl } from '@angular/forms';

describe('CustomValidatorsService', () => {
  const service = new CustomValidatorsService();

  it('passwordsMatch: should determine if two form control values match', () => {
    const mockFormGroup = new FormGroup({
      password: new FormControl('apples1'),
      confirmPassword: new FormControl('apples2')
    }, {
      validators: [service.passwordsMatch('password', 'confirmPassword')]
    });

    expect(mockFormGroup.status).toBe('INVALID');
    expect(mockFormGroup.errors['passwordMismatch']).toBe(true);
    mockFormGroup.patchValue({ confirmPassword: 'apples1' });
    expect(mockFormGroup.status).toBe('VALID');
    mockFormGroup.patchValue({ password: '', confirmPassword: 'apples1' });
    expect(mockFormGroup.status).toBe('VALID');
    mockFormGroup.patchValue({ password: 'apples1', confirmPassword: '' });
    expect(mockFormGroup.status).toBe('VALID');
  });

  it('startBeforeEnd: should determine if start date is before end date and assign error with error key', () => {
    const mockFormGroup = new FormGroup({
      start: new FormControl('2018-10-20'),
      end: new FormControl('2018-10-25')
    }, {
      validators: [service.startBeforeEnd('start', 'end', 'someError')]
    });

    expect(mockFormGroup.status).toBe('VALID');
    mockFormGroup.patchValue({ start: '2018-10-25' , end: '2018-10-20' });
    expect(mockFormGroup.status).toBe('INVALID');
    expect(mockFormGroup.errors['someError']).toBe(true);
    mockFormGroup.patchValue({ start: '2018-10-25' , end: '2018-10-25' });
    expect(mockFormGroup.status).toBe('VALID');
    mockFormGroup.patchValue({ start: 'gwegww' , end: '2018-10-25' });
    expect(mockFormGroup.status).toBe('VALID');
    mockFormGroup.patchValue({ start: '2018-10-25' , end: 'efwfew' });
    expect(mockFormGroup.status).toBe('VALID');
    mockFormGroup.patchValue({ start: '' , end: '2018-10-25' });
    expect(mockFormGroup.status).toBe('VALID');
    mockFormGroup.patchValue({ start: '2018-10-25' , end: '' });
    expect(mockFormGroup.status).toBe('VALID');
    mockFormGroup.patchValue({ start: '' , end: '' });
    expect(mockFormGroup.status).toBe('VALID');

    mockFormGroup.patchValue({ start: new Date('2018-10-20'), end: new Date('2018-10-25') });
    expect(mockFormGroup.status).toBe('VALID');
    mockFormGroup.patchValue({ start: new Date('2018-10-25') , end: new Date('2018-10-20') });
    expect(mockFormGroup.status).toBe('INVALID');
    mockFormGroup.patchValue({ start: new Date('2018-10-25') , end: new Date('2018-10-25') });
    expect(mockFormGroup.status).toBe('VALID');
  });
});
