interface SimpleCardProps {
    link: string;
    title: string;
  }
  
  export function SimpleCard({ link, title }: SimpleCardProps) {
    return (
      <a href={link} className="border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow">
        <div className="text-gray-700 font-semibold text-center text-xl p-1">
          {title}
        </div>
      </a>      
    );
  }
  