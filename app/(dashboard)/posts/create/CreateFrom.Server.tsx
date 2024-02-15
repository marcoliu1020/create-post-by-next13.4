import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

// apis
import { addPost } from "./action"

// components
import SubmitButton from "@/app/components/SubmitButton"

export default function CreateFormByServer() {
    return (
        <Card className="bg-inherit shadow-none border-none">
            <CardHeader>
                <CardTitle className="mx-auto">Create a New Post</CardTitle>
            </CardHeader>
            <CardContent>
                <Form />
            </CardContent>
        </Card>
    )
}

function Form() {
    return (
        <form className="mx-auto max-w-xl grid grid-cols-1 gap-5" action={addPost}>
            <Label className="space-y-2">
                <span>Title:</span>
                <Input
                    name='title'
                    type="text"
                    required
                    autoFocus
                    tabIndex={1}
                />
            </Label>

            <Label className="space-y-2">
                <span>Body:</span>
                <Textarea
                    name='body'
                    required
                    tabIndex={1}
                />
            </Label>

            <Label className="space-y-2">
                <span>Priority:</span>
                <Select name="priority" defaultValue="low">
                    <SelectTrigger tabIndex={1}>
                        <SelectValue placeholder='select priority' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="low">low</SelectItem>
                        <SelectItem value="medium">medium</SelectItem>
                        <SelectItem value="high">high</SelectItem>
                    </SelectContent>
                </Select>
            </Label>

            <SubmitButton className="block mx-auto" tabIndex={1} />
        </form>
    )
}

