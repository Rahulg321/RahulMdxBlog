import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Profile() {
  return (
    <div className="flex items-center space-x-4 p-4">
      <Avatar className="w-16 h-16">
        <AvatarImage
          src="/personal/rahulfront.jpg?height=64&width=64"
          alt="Profile picture"
        />
        <AvatarFallback>RG</AvatarFallback>
      </Avatar>
      <div>
        <h2 className="text-xl font-semibold ">Rahul Gupta</h2>
        <span className="text-sm text-gray-500">Software Engineer</span>
      </div>
    </div>
  );
}
