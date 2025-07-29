import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function QuickApplySection() {
  return (
    <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-blue-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-float"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500 mb-4">
            Quick Apply
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Your journey starts here!
          </h3>
        </div>

        <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <Input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number
              </label>
              <Input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Id
              </label>
              <Input
                type="email"
                placeholder="Email Id"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Service you are interested in
              </label>
              <Select>
                <SelectTrigger className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white">
                  <SelectValue placeholder="Choose a service" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 border-gray-600">
                  <SelectItem value="web-development" className="text-white hover:bg-gray-600">Web Development</SelectItem>
                  <SelectItem value="data-science" className="text-white hover:bg-gray-600">Data Science</SelectItem>
                  <SelectItem value="ui-ux-design" className="text-white hover:bg-gray-600">UI/UX Design</SelectItem>
                  <SelectItem value="digital-marketing" className="text-white hover:bg-gray-600">Digital Marketing</SelectItem>
                  <SelectItem value="ai-ml" className="text-white hover:bg-gray-600">AI/ML</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="terms" 
                className="border-gray-600 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
              />
              <label htmlFor="terms" className="text-sm text-gray-300 cursor-pointer">
                I agree with <span className="text-blue-400 hover:underline">Terms & Conditions</span>
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Register Now
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}