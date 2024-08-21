export default function Hiring() {
    const stats = [
      { value: "$14T", description: "AUM of firms using Hebbia" },
      { value: "1000+", description: "use cases in production" },
      { value: "4 years", description: "deploying enterprise LLMs" },
      { value: "5000+", description: "1:1 AI onboardings" },
    ]
  
    return (
      <div className="bg-white p-8 w-full max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Pioneering Enterprise AI.</h1>
        <p className="text-xl text-center text-gray-600 mb-8">Don't settle for second best.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-blue-700 text-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 cursor-pointer"
            >
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm md:text-base">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }