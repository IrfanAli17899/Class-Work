/*eslint-disable */
import React from 'react';
function validateForm(check, data, field, err) {
    const {
        name,
        pass
    } = data;

    var errors = err ? err : {
        hasError: false,
        errorsObj: {}
    }



    let Validation = {
        name: {
            Validate: [{
                condition: name.length < 3,
                message: " Please Specify Your Full Name . ",
            }, {
                condition: /\d/.test(name) || /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(name),
                message: " Name Can Not Contain Numbers Or Any Special Character . ",
            }
            ],
            elem: "name"
        },
        pass: {
            Validate: [{
                condition: pass.length < 4,
                message: " Password Can't Be Less Than 6 Charachters . ",
            }, {
                condition: name === pass,
                message: " Password Can't Contain Your Name "
            }
            ],
            elem: "pass"
        },
    }


    if (check === "all") {
        for (var i in Validation) {
            var conArray = Validation[i].Validate;
            errors.errorsObj[Validation[i].elem] = { message: [] }
            for (var j = 0; j < conArray.length; j++) {
                if (conArray[j].condition) {
                    errors.hasError = true
                    errors.errorsObj[Validation[i].elem].message.push(conArray[j].message)
                }
            }
            if (!errors.errorsObj[Validation[i].elem].message.length) {
                delete errors.errorsObj[Validation[i].elem]
            }
        }
        return errors
    }


    if (check === "each") {
        var conArray = Validation[field].Validate;
        errors.errorsObj[Validation[field].elem] = { message: [] }
        for (var j = 0; j < conArray.length; j++) {
            if (conArray[j].condition) {
                errors.hasError = true
                errors.errorsObj[Validation[field].elem].message.push(conArray[j].message)
            }
        }
        if (!errors.errorsObj[Validation[field].elem].message.length) {
            delete errors.errorsObj[Validation[field].elem]
        }
        return errors
    }




    return errors.hasError ? errors : {
        hasError: false
    }
}


const Loader = () => {
    return (
        <div className="LoaderContainer">
            <div className="loader">
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    )
}



export { validateForm, Loader };