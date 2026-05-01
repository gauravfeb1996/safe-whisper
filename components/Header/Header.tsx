import { Bell, Search } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

export function Header() {
    return (
        <div className="sticky top-0 z-50 flex border-b px-6 py-3.5 bg-background items-center">
            <InputGroup className="w-1/2 rounded-full pl-4 mx-auto">
                <InputGroupAddon align="inline-start">
                    <Search />
                </InputGroupAddon>
                <InputGroupInput
                    placeholder="Search for topics, feelings, support...."
                    className="placeholder:font-semibold text-black rounded-full"
                />
            </InputGroup>
            <Bell size={20} />
        </div>
    );
}
