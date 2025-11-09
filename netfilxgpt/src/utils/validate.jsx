    export const checkValidData = (name, email, password, isSignInForm) => {
    const errors = {};

    // Name validation (only for Sign Up)
    if (!isSignInForm && (!name || name.trim().length < 3)) {
        errors.name = "Name must be at least 3 characters long.";
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        errors.email = "Please enter a valid email address.";
    }

    // Password validation (show one message at a time)
    if (password.length < 6) {
        errors.password = "Password must be at least 6 characters long.";
    } else if (!/[A-Z]/.test(password)) {
        errors.password = "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(password)) {
        errors.password = "Password must contain at least one lowercase letter.";
    } else if (!/\d/.test(password)) {
        errors.password = "Password must contain at least one number.";
    } else if (!/[@$!%*?&]/.test(password)) {
        errors.password =
        "Password must contain at least one special character (@, $, !, %, *, ?, &).";
    }

    return Object.keys(errors).length > 0 ? errors : null;
    };
