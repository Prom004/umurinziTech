


export default function DeviceRow({ device }) {
    const getStatusBadge = (status) => {
      const statusConfig = {
        Active: { bg: 'bg-green-100', text: 'text-green-800', dot: 'bg-green-500' },
        Transferred: { bg: 'bg-yellow-100', text: 'text-yellow-800', dot: 'bg-yellow-500' },
        Stolen: { bg: 'bg-red-100', text: 'text-red-800', dot: 'bg-red-500' },
        Lost: { bg: 'bg-yellow-100', text: 'text-yellow-800', dot: 'bg-yellow-500' }
      };
      
      const config = statusConfig[status] || statusConfig.Active;
      
      return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
          <span className={`w-2 h-2 ${config.dot} rounded-full mr-2`}></span>
          {status}
        </span>
      );
    };
  
    const getDeviceIcon = (type) => {
      const icons = {
        smartphone: (
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
          </svg>
        ),
        laptop: (
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        ),
        smartwatch: (
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        ),
        tablet: (
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
          </svg>
        )
      };
      return icons[type.toLowerCase()] || icons.smartphone;
    };
  
    return (
      <div className="flex items-center justify-between py-4 px-6 border-b border-gray-100 hover:bg-gray-50 transition-colors">
        <div className="flex items-center space-x-4 flex-1">
          <div className="flex items-center space-x-3">
            {getDeviceIcon(device.type)}
            <div>
              <h3 className="font-semibold text-gray-900">{device.name}</h3>
              <p className="text-sm text-gray-500">{device.brand} • {device.color} • {device.storage}</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-8 text-sm">
          <div className="text-gray-700 font-medium w-20 text-center">{device.type}</div>
          <div className="text-gray-700 font-medium w-32 text-center">{device.imei}</div>
          <div className="w-24 text-center">
            {getStatusBadge(device.status)}
          </div>
          <div className="text-gray-600 w-28 text-center">{device.dateRegistered}</div>
          <div className="flex space-x-2 w-28 justify-center">
          <select
                  value={device.action}
                  onChange={(e) => device.action = e.target.value}
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all duration-200 bg-white"
                >
                  <option>View</option>
                  <option value="edit">Edit</option>
                  <option value="delete">Delete</option>
                  <option value="transfer">Transfer</option>
                </select>
            
          </div>
        </div>
      </div>
    );
  }