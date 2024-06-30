interface FontIcon {
    iconType: string;
}

export function FontIcon(
    { iconType }: FontIcon ) {

    return (
        <i className={`${iconType} text-4xl text-start text-primary`} />
    )
}