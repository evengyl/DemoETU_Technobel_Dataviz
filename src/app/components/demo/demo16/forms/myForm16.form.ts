import { FormBuilder, FormGroup } from "@angular/forms";
import { emailValidator } from "../validators/email.validator";
import { nameValidator } from "../validators/name.validator";
import { TwoPasswordCheckValidator } from "../validators/twoPasswordCheck.validator";

export function generateMyForm(fb : FormBuilder) : FormGroup
{
    return fb.group({
        name : ["", [nameValidator], []],
        email : ["", [emailValidator], []],
        password : ["", [], []],
        passwordVerify : ["", [], []]
    }, {
        validators : TwoPasswordCheckValidator
    })
}