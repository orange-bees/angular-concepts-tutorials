import { Component, OnInit } from '@angular/core';
import { CustomValidatorsService } from '../../services/custom-validators.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  readonly PHONE_NUMBER_REGEX = /\([0-9]{3}\)\ [0-9]{3}\-[0-9]{4}/gm;

  constructor(
    private customValidatorsService: CustomValidatorsService,
  ) {
    this.form = new FormGroup(
      {
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required]),
        phoneNumber: new FormControl('', [Validators.required, Validators.pattern(this.PHONE_NUMBER_REGEX)]),
        startDate: new FormControl(null, [Validators.required]),
        endDate: new FormControl(null, [Validators.required]),
      }, {
        validators: [
          this.customValidatorsService.passwordsMatch('password', 'confirmPassword'),
          this.customValidatorsService.startBeforeEnd('startDate', 'endDate', 'endBeforeStart'),
        ]
      }
    );
  }

  ngOnInit() {}
}
