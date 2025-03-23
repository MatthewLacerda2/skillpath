import thumbnails from '../data/courses-thumbnails.json';

interface RecommendationProps {
    link: string;
    title: string;
    subtitle: string;
}
  
export function Recommendation({ link, title, subtitle }: RecommendationProps) {
    const courseKey = link.replace(/^\//, '').split('/')[0];
    
    return (
        <a href={link} className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl">
            <div className="relative w-full mb-3">
                <div 
                    className="absolute inset-0 bg-gray-200 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${thumbnails[courseKey as keyof typeof thumbnails]})` }}
                ></div>
                <div style={{ paddingBottom: '56.25%' }}></div>
            </div>
            <h4 className="text-2xl font-semibold mb-2">{title}</h4>
            <p className="text-base text-gray-500">{subtitle}</p>
        </a>
    );
} 