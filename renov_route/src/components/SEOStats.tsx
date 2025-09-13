import Script from 'next/script';

interface StatItem {
  label: string;
  value: number | string;
  unit?: string;
  description?: string;
  icon?: string;
  color?: 'blue' | 'green' | 'yellow' | 'red' | 'purple' | 'indigo';
  trend?: {
    value: number;
    direction: 'up' | 'down' | 'stable';
    period: string;
  };
  source?: string;
  lastUpdated?: string;
}

interface SEOStatsProps {
  stats: StatItem[];
  className?: string;
  showTrend?: boolean;
  animated?: boolean;
  columns?: 1 | 2 | 3 | 4;
}

export default function SEOStats({ 
  stats, 
  className = "",
  showTrend = true,
  columns = 3
}: SEOStatsProps) {
  const getColorClass = (color?: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-500 text-white';
      case 'green':
        return 'bg-green-500 text-white';
      case 'yellow':
        return 'bg-yellow-500 text-white';
      case 'red':
        return 'bg-red-500 text-white';
      case 'purple':
        return 'bg-purple-500 text-white';
      case 'indigo':
        return 'bg-indigo-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getTrendColor = (direction?: string) => {
    switch (direction) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      case 'stable':
        return 'text-gray-600';
      default:
        return 'text-gray-600';
    }
  };

  const getGridClass = () => {
    switch (columns) {
      case 1:
        return 'grid-cols-1';
      case 2:
        return 'grid-cols-1 md:grid-cols-2';
      case 3:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "Statistiques Renov Route",
    "description": "Statistiques et métriques de performance de Renov Route",
    "publisher": {
      "@type": "Organization",
      "name": "Renov Route"
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString(),
    "variableMeasured": stats.map(stat => ({
      "@type": "PropertyValue",
      "name": stat.label,
      "value": stat.value,
      "unitCode": stat.unit || "",
      "description": stat.description || ""
    }))
  };

  return (
    <>
      <div className={className}>
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Nos Statistiques
          </h2>
          
          <div className={`grid ${getGridClass()} gap-6`}>
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {stat.icon && (
                      <div className={`w-10 h-10 rounded-lg ${getColorClass(stat.color)} flex items-center justify-center text-xl`}>
                        {stat.icon}
                      </div>
                    )}
                    <div>
                      <h3 className="text-sm font-medium text-gray-600">
                        {stat.label}
                      </h3>
                      {stat.description && (
                        <p className="text-xs text-gray-500 mt-1">
                          {stat.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className="ml-1 text-sm text-gray-600">
                      {stat.unit}
                    </span>
                  )}
                </div>
                
                {showTrend && stat.trend && (
                  <div className="mt-3 flex items-center">
                    <span className={`text-sm font-medium ${getTrendColor(stat.trend.direction)}`}>
                      {stat.trend.direction === 'up' && '↗'}
                      {stat.trend.direction === 'down' && '↘'}
                      {stat.trend.direction === 'stable' && '→'}
                      {stat.trend.value}%
                    </span>
                    <span className="ml-1 text-xs text-gray-500">
                      {stat.trend.period}
                    </span>
                  </div>
                )}
                
                {stat.source && (
                  <div className="mt-2 text-xs text-gray-500">
                    Source: {stat.source}
                  </div>
                )}
                
                {stat.lastUpdated && (
                  <div className="mt-1 text-xs text-gray-400">
                    Mis à jour: {new Date(stat.lastUpdated).toLocaleDateString('fr-FR')}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Script
        id="stats-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </>
  );
}