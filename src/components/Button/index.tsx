interface ButtonProps {
    children: React.ReactNode
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = ({ children, variant = 'primary', size = 'md' }: ButtonProps) => {
    const buttonStyles = {
        base: "flex justify-center items-center gap-2 text-nowrap leading-none hover:cursor-pointer transition-colors duration-200 font-medium rounded-full focus:outline-none py-2.5 transition",
        variant: {
            primary: "bg-white text-[#6329A2] hover:bg-gray-100",
            secondary: "bg-transparent border border-white text-white px-6 hover:bg-white hover:text-black",
        },
        size: {
            sm: "px-5 py-2 text-sm",
            md: "px-8 text-base",
            lg: "px-10 text-lg"
        },
    };

    const className = `${buttonStyles.base} ${buttonStyles.variant[variant]} ${buttonStyles.size[size]}`;  

    return (
        <button type="button" className={className}>{children}</button>
    )
}