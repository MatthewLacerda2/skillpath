interface RecommendationProps {
    link: string;
    title: string;
    subtitle: string;
}
  
export function Recommendation({ link, title, subtitle }: RecommendationProps) {
    return (
        <a href={link} className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl">
        <div className="h-40 bg-gray-200 mb-2"></div>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-sm text-gray-500">{subtitle}</p>
        </a>
    );
} 