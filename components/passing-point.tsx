import { Card, CardContent } from "@/components/ui/card";
import { TrainScheduleDataType } from "./schedule";

export type PassingPointDataType = TrainScheduleDataType["passingPoints"];

export const PassingPoint = ({
  passingPoints,
}: {
  passingPoints: PassingPointDataType;
}) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Passing Points</h2>
      <Card
        className="overflow-y-auto"
        style={{ height: "calc(100vh - 16rem)" }}
      >
        <CardContent className="py-4">
          <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 after:left-0 grid gap-6">
            {passingPoints.map((point, index) => (
              <div key={index} className="grid gap-1 text-sm relative">
                <div className="aspect-square w-3 bg-pumpkin-600 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                <div className="font-medium">{point.name}</div>
                <div className="flex items-center justify-between">
                  <div className="text-xl font-medium">{point.time}</div>
                  {/* <div className="text-sm bg-primary px-1 py-0.5 rounded-md text-primary-foreground">
                    {point.message}
                  </div> */}
                </div>
                <div className="text-sm text-muted-foreground">
                  Platform {point.platform}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
