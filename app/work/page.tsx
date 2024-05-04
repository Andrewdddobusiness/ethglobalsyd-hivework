import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import LayoutAuthenticated from "@/components/layouts/layout-authenticated";

export default function Work() {
  return (
    <LayoutAuthenticated>
      <div className="flex flex-col items-center  justify-center">
        <div className="p-6 w-3/4">
          <h1 className="text-4xl font-semibold mt-8">My Jobs</h1>

          <div className="mt-4 flex flex-row">
            <h2 className="text-lg font-semibold">Earnings available now:</h2>
            <div className="text-xl text-green-600 ml-4">$0.00</div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Active contracts</h2>
          </div>
          <div className="flex flex-col justify-center items-center mt-6 p-16 rounded-lg bg-zinc-100">
            <div className="text-black text-xl font-semibold">
              There are no active contracts.
            </div>
            <div className="text-gray-500 mt-4">
              Contracts you’re actively working on will appear here.
            </div>
            <Button
              className="w-96 bg-yellow-400 text-bold rounded-full mt-8 text-md"
              variant="default"
            >
              Explore freelance opportunities
            </Button>
          </div>
        </div>
      </div>
    </LayoutAuthenticated>
  );
}
