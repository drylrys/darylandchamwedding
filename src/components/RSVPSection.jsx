import {
  Badge,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Select,
  Text,
  Textarea,
  VStack,
  useToast
} from "@chakra-ui/react";
import { useState } from "react";
// import { supabase } from '../lib/supabase';
import Section from "./Section";

const DEADLINE = "February 10, 2027";

// ─── Guest allowlist ────────────────────────────────────────────────────────
// Key: normalized lowercase name (or part of name for flexible matching)
// Value: max seats allowed (1 = no plus-one, 2 = +1, 3 = +2, etc.)
const GUEST_ALLOWLIST = {
  // Examples — replace with real guest names before going live
  "juan dela cruz": 2,
  "maria santos": 2,
  "jose reyes": 3,
  "ana garcia": 0,
  "daryl reyes": 3
  // Add more guests here...
};

// Returns allowed seat count for a name, or 1 if not found (no plus-one)
function getAllowedSeats(name) {
  const normalized = name.trim().toLowerCase();
  // Exact match first
  if (GUEST_ALLOWLIST[normalized] !== undefined)
    return GUEST_ALLOWLIST[normalized];
  // Partial match — check if any key is contained in the typed name
  for (const [key, seats] of Object.entries(GUEST_ALLOWLIST)) {
    if (normalized.includes(key) || key.includes(normalized)) return seats;
  }
  return 1; // default: seat for 1 only
}

const defaultForm = {
  full_name: "",
  email: "",
  phone: "",
  attending: "",
  guest_count: "1",
  meal_choice: "",
  guest_names: [],
  message: ""
};

function RSVPSection() {
  const [form, setForm] = useState(defaultForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  // Step: 'name' = entering name, 'form' = full form visible
  const [step, setStep] = useState("name");
  const [allowedSeats, setAllowedSeats] = useState(1);
  const toast = useToast();

  // Step 1 — look up the name
  const handleNameLookup = () => {
    if (!form.full_name.trim()) {
      setErrors({ full_name: "Please enter your full name." });
      return;
    }
    const seats = getAllowedSeats(form.full_name);
    setAllowedSeats(seats);
    setForm((prev) => ({ ...prev, guest_count: "1" }));
    setErrors({});
    setStep("form");
  };

  const validate = () => {
    const e = {};
    if (!form.full_name.trim()) e.full_name = "Please enter your full name.";
    if (!form.attending) e.attending = "Please select your attendance.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("guest_name_")) {
      const index = parseInt(name.split("_")[2], 10);
      setForm((prev) => {
        const guest_names = [...prev.guest_names];
        guest_names[index] = value;
        return { ...prev, guest_names };
      });
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("rsvp_responses").insert([
        {
          full_name: form.full_name.trim(),
          email: form.email.trim() || null,
          phone: form.phone.trim() || null,
          attending: form.attending,
          guest_count: parseInt(form.guest_count, 10),
          meal_choice: form.meal_choice || null,
          guest_names:
            form.guest_names.filter((name) => name.trim()).length > 0
              ? form.guest_names
              : null,
          message: form.message.trim() || null
        }
      ]);

      if (error) throw error;

      setSubmitted(true);
      setForm(defaultForm);
    } catch (err) {
      toast({
        title: "Something went wrong.",
        description:
          err?.message ?? "Please try again or contact our coordinator.",
        status: "error",
        duration: 6000,
        isClosable: true,
        position: "top"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section
      id="rsvp"
      eyebrow="RSVP"
      title="Reserve Your Seat"
      description={`Kindly confirm your attendance by ${DEADLINE}.`}
      bg="white"
    >
      <VStack spacing={{ base: 8, md: 10 }} maxW="2xl" mx="auto" w="full">
        {/* Header */}
        <VStack spacing={3}>
          <HStack spacing={3} justify="center" align="center">
            <Box w="10" h="px" bg="gold.500" opacity={0.6} />
            <Text
              fontFamily="heading"
              fontSize={{ base: "2xs", md: "xs" }}
              color="gold.500"
              letterSpacing="0.25em"
              textTransform="uppercase"
            >
              ✦
            </Text>
            <Box w="10" h="px" bg="gold.500" opacity={0.6} />
          </HStack>
          <Text
            fontFamily="heading"
            fontSize={{ base: "xl", md: "2xl" }}
            color="sage.800"
            letterSpacing="0.06em"
            fontWeight="300"
          >
            Confirm Your Attendance
          </Text>
          <Box w="16" h="px" bg="sage.200" />
        </VStack>

        {/* ── Success state ── */}
        {submitted ? (
          <VStack
            spacing={4}
            py={8}
            textAlign="center"
            borderTop="1px solid"
            borderBottom="1px solid"
            borderColor="sage.100"
            w="full"
          >
            <Text fontSize="4xl">🎉</Text>
            <Text
              fontFamily="heading"
              fontSize={{ base: "xl", md: "2xl" }}
              color="sage.800"
            >
              Thank you for your RSVP!
            </Text>
            <Text color="sage.700" maxW="sm">
              We have received your response and look forward to celebrating
              with you on our special day.
            </Text>
            <Button
              variant="outline"
              colorScheme="sage"
              size="sm"
              onClick={() => {
                setSubmitted(false);
                setStep("name");
                setForm(defaultForm);
              }}
            >
              Submit another response
            </Button>
          </VStack>
        ) : step === "name" ? (
          /* ── Step 1: Name lookup ── */
          <VStack spacing={5} w="full">
            <Text color="sage.700" textAlign="center" fontSize="sm" maxW="sm">
              Enter your full name as it was written on your invitation so we
              can look up your reservation.
            </Text>

            <FormControl isRequired isInvalid={!!errors.full_name}>
              <FormLabel
                color="sage.600"
                fontWeight="normal"
                fontSize="xs"
                letterSpacing="0.12em"
                textTransform="uppercase"
              >
                Full Name
              </FormLabel>
              <Input
                name="full_name"
                value={form.full_name}
                onChange={handleChange}
                placeholder="e.g. Juan dela Cruz"
                variant="flushed"
                borderColor="sage.200"
                _hover={{ borderColor: "sage.400" }}
                _focus={{
                  borderColor: "sage.500",
                  boxShadow: "none"
                }}
                size="lg"
                onKeyDown={(e) => e.key === "Enter" && handleNameLookup()}
              />
              <FormErrorMessage>{errors.full_name}</FormErrorMessage>
            </FormControl>

            <Button
              colorScheme="sage"
              size="lg"
              w="full"
              onClick={handleNameLookup}
              _hover={{ transform: "translateY(-1px)", boxShadow: "md" }}
            >
              Find My Reservation →
            </Button>

            <Text fontSize="xs" color="sage.500" textAlign="center">
              RSVP deadline:{" "}
              <Text as="span" fontWeight="semibold" color="sage.700">
                {DEADLINE}
              </Text>
            </Text>
          </VStack>
        ) : (
          /* ── Step 2: Full form ── */
          <Box as="form" onSubmit={handleSubmit} w="full">
            <VStack spacing={5} w="full">
              {/* Guest name (read-only) + seat allowance badge */}
              <HStack
                w="full"
                px={0}
                py={3}
                borderBottom="1px solid"
                borderColor="sage.100"
                justify="space-between"
                flexWrap="wrap"
                gap={2}
              >
                <VStack align="flex-start" spacing={0}>
                  <Text
                    fontSize="xs"
                    color="sage.600"
                    textTransform="uppercase"
                    letterSpacing="0.1em"
                  >
                    Reservation for
                  </Text>
                  <Text fontWeight="semibold" color="sage.800" fontSize="md">
                    {form.full_name}
                  </Text>
                </VStack>
                <HStack spacing={2}>
                  <Badge
                    colorScheme={allowedSeats > 1 ? "green" : "gray"}
                    borderRadius="full"
                    px={3}
                    py={1}
                    fontSize="xs"
                  >
                    {allowedSeats > 1
                      ? `+${allowedSeats - 1} guest${allowedSeats - 1 > 1 ? "s" : ""} allowed`
                      : "Solo seat"}
                  </Badge>
                  <Button
                    size="xs"
                    variant="ghost"
                    colorScheme="sage"
                    onClick={() => {
                      setStep("name");
                      setErrors({});
                    }}
                  >
                    Edit
                  </Button>
                </HStack>
              </HStack>

              {/* Email + Phone */}
              <HStack
                w="full"
                spacing={4}
                flexDir={{ base: "column", sm: "row" }}
                align="flex-start"
              >
                <FormControl isInvalid={!!errors.email}>
                  <FormLabel
                    color="sage.600"
                    fontWeight="normal"
                    fontSize="xs"
                    letterSpacing="0.12em"
                    textTransform="uppercase"
                  >
                    Email{" "}
                    <Text as="span" color="sage.400">
                      (optional)
                    </Text>
                  </FormLabel>
                  <Input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    variant="flushed"
                    borderColor="sage.200"
                    _hover={{ borderColor: "sage.400" }}
                    _focus={{ borderColor: "sage.500", boxShadow: "none" }}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel
                    color="sage.600"
                    fontWeight="normal"
                    fontSize="xs"
                    letterSpacing="0.12em"
                    textTransform="uppercase"
                  >
                    Phone{" "}
                    <Text as="span" color="sage.400">
                      (optional)
                    </Text>
                  </FormLabel>
                  <Input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+63 917 000 0000"
                    variant="flushed"
                    borderColor="sage.200"
                    _hover={{ borderColor: "sage.400" }}
                    _focus={{ borderColor: "sage.500", boxShadow: "none" }}
                  />
                </FormControl>
              </HStack>

              {/* Attendance */}
              <FormControl isRequired isInvalid={!!errors.attending}>
                <FormLabel
                  color="sage.600"
                  fontWeight="normal"
                  fontSize="xs"
                  letterSpacing="0.12em"
                  textTransform="uppercase"
                >
                  Will you be attending?
                </FormLabel>
                <Select
                  name="attending"
                  value={form.attending}
                  onChange={handleChange}
                  placeholder="Select your response"
                  variant="flushed"
                  borderColor="sage.200"
                  _hover={{ borderColor: "sage.400" }}
                  _focus={{ borderColor: "sage.500", boxShadow: "none" }}
                  size="lg"
                >
                  <option value="yes">✅ Yes, I will be there!</option>
                  <option value="maybe">🤔 Maybe / Still confirming</option>
                  <option value="no">❌ Regretfully, I cannot attend</option>
                </Select>
                <FormErrorMessage>{errors.attending}</FormErrorMessage>
              </FormControl>

              {/* Guest count + Meal — only when attending */}
              {(form.attending === "yes" || form.attending === "maybe") && (
                <VStack w="full" spacing={5}>
                  <HStack
                    w="full"
                    spacing={4}
                    flexDir={{ base: "column", sm: "row" }}
                    align="flex-start"
                  >
                    <FormControl>
                      <FormLabel
                        color="sage.600"
                        fontWeight="normal"
                        fontSize="xs"
                        letterSpacing="0.12em"
                        textTransform="uppercase"
                      >
                        Number of Guests
                      </FormLabel>
                      {allowedSeats === 1 ? (
                        /* No plus-one — locked to 1 */
                        <HStack
                          px={0}
                          py={2}
                          borderBottom="1px solid"
                          borderColor="sage.100"
                          spacing={2}
                        >
                          <Text color="sage.800" fontSize="sm">
                            1 guest (you)
                          </Text>
                          <Badge
                            colorScheme="gray"
                            borderRadius="full"
                            fontSize="xs"
                          >
                            No plus-one
                          </Badge>
                        </HStack>
                      ) : (
                        <Select
                          name="guest_count"
                          value={form.guest_count}
                          onChange={handleChange}
                          variant="flushed"
                          borderColor="sage.200"
                          _hover={{ borderColor: "sage.400" }}
                          _focus={{
                            borderColor: "sage.500",
                            boxShadow: "none"
                          }}
                        >
                          {Array.from(
                            { length: allowedSeats },
                            (_, i) => i + 1
                          ).map((n) => (
                            <option key={n} value={n}>
                              {n === 1
                                ? "1 guest (just me)"
                                : `${n} guests (me + ${n - 1})`}
                            </option>
                          ))}
                        </Select>
                      )}
                    </FormControl>

                    <FormControl>
                      <FormLabel
                        color="sage.600"
                        fontWeight="normal"
                        fontSize="xs"
                        letterSpacing="0.12em"
                        textTransform="uppercase"
                      >
                        Meal Preference
                      </FormLabel>
                      <Select
                        name="meal_choice"
                        value={form.meal_choice}
                        onChange={handleChange}
                        placeholder="Select meal"
                        variant="flushed"
                        borderColor="sage.200"
                        _hover={{ borderColor: "sage.400" }}
                        _focus={{ borderColor: "sage.500", boxShadow: "none" }}
                      >
                        <option value="beef">🥩 Beef</option>
                        <option value="fish">🐟 Fish</option>
                        <option value="vegetarian">🥗 Vegetarian</option>
                      </Select>
                    </FormControl>
                  </HStack>

                  {/* Guest names — only when there are allowed guests */}
                  {allowedSeats > 1 && (
                    <VStack w="full" spacing={3}>
                      <HStack justify="space-between" w="full">
                        <FormLabel
                          color="sage.600"
                          fontWeight="normal"
                          fontSize="xs"
                          letterSpacing="0.12em"
                          textTransform="uppercase"
                          m={0}
                        >
                          Guest Names{" "}
                          <Text as="span" color="sage.400">
                            (optional)
                          </Text>
                        </FormLabel>
                        <Badge
                          colorScheme="green"
                          borderRadius="full"
                          px={3}
                          py={1}
                          fontSize="xs"
                        >
                          {`+${allowedSeats - 1} guest${allowedSeats - 1 > 1 ? "s" : ""} allowed`}
                        </Badge>
                      </HStack>
                      {Array.from(
                        { length: allowedSeats - 1 },
                        (_, i) => i
                      ).map((i) => (
                        <FormControl key={i}>
                          <FormLabel
                            color="sage.600"
                            fontWeight="normal"
                            fontSize="xs"
                            letterSpacing="0.12em"
                            textTransform="uppercase"
                          >
                            Guest {i + 1}
                          </FormLabel>
                          <Input
                            name={`guest_name_${i}`}
                            value={form.guest_names[i] || ""}
                            onChange={handleChange}
                            placeholder={`Name of guest ${i + 1}`}
                            variant="flushed"
                            borderColor="sage.200"
                            _hover={{ borderColor: "sage.400" }}
                            _focus={{
                              borderColor: "sage.500",
                              boxShadow: "none"
                            }}
                          />
                        </FormControl>
                      ))}
                    </VStack>
                  )}
                </VStack>
              )}

              {/* Message */}
              <FormControl>
                <FormLabel
                  color="sage.600"
                  fontWeight="normal"
                  fontSize="xs"
                  letterSpacing="0.12em"
                  textTransform="uppercase"
                >
                  Message / Dietary notes{" "}
                  <Text as="span" color="sage.400">
                    (optional)
                  </Text>
                </FormLabel>
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Any allergies, special requests, or a note for the couple…"
                  variant="flushed"
                  borderColor="sage.200"
                  _hover={{ borderColor: "sage.400" }}
                  _focus={{ borderColor: "sage.500", boxShadow: "none" }}
                  rows={3}
                  resize="none"
                />
              </FormControl>

              {/* Submit */}
              <Button
                type="submit"
                colorScheme="sage"
                size="lg"
                w="full"
                isLoading={loading}
                loadingText="Sending…"
                _hover={{ transform: "translateY(-1px)", boxShadow: "md" }}
                transition="all .2s"
              >
                Send RSVP
              </Button>

              <Text fontSize="xs" color="sage.500" textAlign="center">
                RSVP deadline:{" "}
                <Text as="span" fontWeight="semibold" color="sage.700">
                  {DEADLINE}
                </Text>
              </Text>
            </VStack>
          </Box>
        )}
      </VStack>
    </Section>
  );
}

export default RSVPSection;
