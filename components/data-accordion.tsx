import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { messageData } from "@/data";

interface DataAccordionProps {
  data: {
    id: number;
    name: string;
    status: string;
    statusDetails?: string[];
    message?: {
      id: number;
      messageTitle: string;
      messageDetails: string;
      time: string;
    }[];
    color: string;
  }[];
}

export function DataAccordion({ data }: DataAccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full h-full text-pumpkin-900"
    >
      {data.map(({ id, message, name, status, statusDetails, color }) => (
        <AccordionItem
          value={name}
          key={id}
          className="hover:bg-pumpkin-200 cursor-pointer rounded h-max border-l-4 transition duration-300"
          style={{ borderLeftColor: color }}
        >
          <AccordionTrigger className="px-8">
            <div className="flex flex-col items-start">
              <p>{name}</p>
              <p className="text-[12px] text-pumpkin-700">{status}</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-8">
            {statusDetails?.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}

            {message?.map(({ id, messageTitle, messageDetails, time }) => (
              <div key={id}>
                <p className="text-pumpkin-700">{messageTitle}</p>
                <p>{messageDetails}</p>
                <p className="text-pumpkin-700">{time}</p>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function MessageAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full h-full text-pumpkin-900"
    >
      {messageData.map(
        ({
          messageNo,
          messageTitle,
          messageBody,
          time,
          dateSent,
          sentTime,
          expireTime,
        }) => (
          <AccordionItem
            value={messageTitle}
            key={messageNo}
            className="hover:bg-pumpkin-200 cursor-pointer rounded h-max transition duration-300"
          >
            <AccordionTrigger className="px-8">
              <div className="flex items-center gap-4">
                <p className="bg-white rounded-full p-4">LO</p>
                <div className="flex flex-col items-start w-full">
                  <p>{messageTitle}</p>
                  <p className="text-sm flex gap-4 text-pumpkin-700">
                    <small>{dateSent}</small>
                    <small>{time}</small>
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-8">
              <p className="mb-8">{messageBody}</p>
              <p>
                <strong>Message number:</strong> {messageNo}
              </p>
              <p>
                <strong>Sent:</strong> {sentTime}
              </p>
              <p>
                <strong>Expires:</strong> {expireTime}
              </p>
            </AccordionContent>
          </AccordionItem>
        )
      )}
    </Accordion>
  );
}
