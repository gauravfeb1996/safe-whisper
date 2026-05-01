import { Bell, Search } from "lucide-react";
import { TextField } from "@/components/text-field/textfield";

export function Header() {
    return (
        <div className="sticky top-0 z-50 flex border-b px-6 py-3.5 bg-background items-center">
            <div className="w-1/2 mx-auto">
                <TextField
                    placeholder="Search for topics, feelings, support...."
                    leftAddon={<Search />}
                    classNames={{
                        input: "placeholder:font-semibold text-black",
                        inputGroup: "rounded-full",
                    }}
                />
            </div>
            <Bell size={20} />
        </div>
    );
}
