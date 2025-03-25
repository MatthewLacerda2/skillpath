interface CourseHeaderProps {
    title: string;
    subtitle: string;
}

export function CourseHeader({ title, subtitle }: CourseHeaderProps) {
    return (
        <header className="text-center py-20">
            <h1 className="text-7xl font-bold font-sans text-gray-900 ">{title}</h1>
            <h2 className="text-2xl text-gray-600 mt-6 mb-14">{subtitle}</h2>
        </header>
    );
}