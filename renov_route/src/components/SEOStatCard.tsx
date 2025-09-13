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

interface SEOStatCardProps {
  stat: StatItem;
  className?: string;
  showTrend?: boolean;
  animated?: boolean;
}

export default function SEOStatCard({ 
  stat, 
  className = "",
  showTrend = true
}: SEOStatCardProps) {
  const colorClasses = {
    blue: 'bg-blue-500 text-white',
    green: 'bg-green-500 text-white',
    yellow: 'bg-yellow-500 text-white',
    red: 'bg-red-500 text-white',
    purple: 'bg-purple-500 text-white',
    indigo: 'bg-indigo-500 text-white'
  };

  const trendColors = {
    up: 'text-green-600',
    down: 'text-red-600',
    stable: 'text-gray-600'
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "QuantitativeValue",
    "name": stat.label,
    "value": stat.value,
    "unitCode": stat.unit || "",
    "description": stat.description || "",
    "datePublished": stat.lastUpdated || new Date().toISOString(),
    "publisher": {
      "@type": "Organization",
      "name": "Renov Route"
    }
  };

  return (
    <>
      <div className={className}>
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                {stat.icon && (
                  <div className={`w-8 h-8 rounded-full ${colorClasses[stat.color || 'blue']} flex items-center justify-center text-xl`}>
                    {stat.icon}
                  </div>
                )}
                <h3 className="text-sm font-medium text-gray-600">
                  {stat.label}
                </h3>
              </div>
              
              <div className="flex items-baseline">
                <span className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </span>
                {stat.unit && (
                  <span className="ml-1 text-sm text-gray-600">
                    {stat.unit}
                  </span>
                )}
              </div>
              
              {stat.description && (
                <p className="text-sm text-gray-600 mt-1">
                  {stat.description}
                </p>
              )}
              
              {showTrend && stat.trend && (
                <div className="mt-3 flex items-center">
                  <span className={`text-sm font-medium ${trendColors[stat.trend.direction]}`}>
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
          </div>
        </div>
      </div>
      
      <Script
        id="stat-card-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </>
  );
}