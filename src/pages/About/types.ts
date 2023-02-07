interface IBaseProps {
}

interface IAboutMeProps extends IBaseProps {
    aboutMe: string;
}

interface IBirthDayProps extends IBaseProps {
    birthday: string;
}

interface ISexProps extends IBaseProps {
    sex: string;
}


export {
    IAboutMeProps,
    IBirthDayProps,
    ISexProps,
}