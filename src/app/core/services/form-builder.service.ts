import { Injectable } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EMAIL_REGEX } from "../constants/regex.conatant";

@Injectable({providedIn: 'root'})
export class FormBuilderService {

    registrationFormGroup: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) {}

    // Registration form section started

    getRegistrationForm(mobileNumber: string): FormGroup {
        this.registrationFormGroup =this.formBuilder.group({
            fullName: ['', [Validators.required, Validators.minLength(3)]],
            gender: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
            dob: ['', Validators.required],
            bloodGroup: ['', Validators.required],
            weight: ['', Validators.required],
            height: ['', Validators.required],
            emergencyContacts: this.formBuilder.array([this.createEmergencyContact()]),
            physicianName: [''],
            physicianContact: [''],
            careTakerName: ['', Validators.required],
            careTakerContact: ['', Validators.required],
            drugAllergies: ['', Validators.required],
            medicationHistory: ['', Validators.required],
            mobileNumber: [mobileNumber]
        });

        return this.registrationFormGroup;
    }

    public createEmergencyContact(): FormGroup {
        return this.formBuilder.group({
          emergencyName: '',
          emergencyContact: '',
        });
    }

    public getEmergencyContact() {
        return this.registrationFormGroup.get('emergencyContacts') as FormArray;
    }

    // Registration form section End

}