import Header from './Header'

// Demo component to test the new Aceternity UI header
const HeaderDemo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Demo content to show scrolling behavior */}
      <div className="pt-32 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            New Aceternity UI Header Demo
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            Scroll down to see the header resize and blur effect
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Feature {item}</h3>
                <p className="text-gray-600">
                  This is a demo card to show how the content looks with the new header.
                  The header will resize and add blur effects when scrolling.
                </p>
              </div>
            ))}
          </div>
          
          <div className="h-screen flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Keep Scrolling</h2>
              <p className="text-gray-600">
                Notice how the header behavior changes as you scroll
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderDemo